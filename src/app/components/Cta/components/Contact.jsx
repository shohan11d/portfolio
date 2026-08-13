"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { validate } from "react-email-validator";
import { toast } from "sonner";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const getEmailJsErrorMessage = (error) => {
  const message = typeof error?.text === "string" ? error.text : "";
  const status = error?.status;

  if (status === 403 && message.includes("domain")) {
    return "EmailJS blocked this site. Add your domain under Account → Security → Allowed origins (include http://localhost:3000).";
  }

  if (status === 403) {
    return message || "EmailJS rejected the request (403). Check Account → Security settings in EmailJS.";
  }

  if (message) {
    return message;
  }

  return "Could not send your message. Try again or use the contact links on the right.";
};

export const Contact = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error("Email service is not configured. Add EmailJS env vars and restart the dev server.", {
        position: "bottom-center",
        duration: 6000,
      });
      return;
    }

    const messageField = form.current?.message?.value ?? "";

    if (!validate(email)) {
      toast.error("Please fill the email field correctly first.", {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }

    if (messageField.trim() === "") {
      toast.error("Please fill the message field first", {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      form.current.reset();
      setEmail("");
      toast.success("Thanks for contacting me! I will mail you back within 48hrs :)", {
        position: "bottom-center",
        duration: 10000,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error(getEmailJsErrorMessage(error), {
        position: "bottom-center",
        duration: 8000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-7  dark:bg-[#12121285] bg-slate-100 rounded-[37px] p-3 outline-1 outline-offset-4 outline  outline-black/20 dark:outline-white/20"
    >
      <div className="flex flex-col gap-4 py-4">
        <h2 className="text-4xl sm:text-2xl xs:text-xl whitespace-pre-line">
          {"Let's talk"}
        </h2>
        <h6 className="text-xs sm:text-[10px] xs:text-[9px] whitespace-pre-line font-light text-comment-grey dark:text-[#c0c0c0] subpixel-antialiased">
          {"I'm excited to apply my skills to your projects. Contact me to learn more about how I can contribute."}
        </h6>
      </div>
      <fieldset className="flex  gap-2 flex-col sm:text-xs  xs:text-[10px">
        <label className="text-nowrap font-code" htmlFor="email">
          <span className="text-pink-500">const</span> email ={" "}
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="user_email"
          className="dark:bg-white/5  bg-black/10 border-none outline-none w-full rounded"
        />
      </fieldset>
      <fieldset className="flex gap-2 flex-col sm:text-xs xs:text-[10px]">
        <label className="text-nowrap font-code" htmlFor="message">
          <span className="text-pink-500 font-code">const</span> message =
        </label>
        <textarea
          name="message"
          id="message"
          className="dark:bg-white/5 bg-black/10 border-none outline-none textarea resize-none w-full rounded"
          rows={5}
        ></textarea>
      </fieldset>
      <button
        type="submit"
        disabled={isSending}
        className="w-[50%] bg-[#cccccc24] dark:bg-[#00000024] shadow-md shadow-[#ffffff33] outline outline-1 2xl:w-[66%] xl:w-[98%] xl:mx-auto ml-auto pr-2 py-2 cursor-pointer group items-center flex relative text-center rounded-full hover:opacity-80 h-full align-middle disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="mx-auto ml-8 font-code">{isSending ? "sending..." : "send message"}</span>
        <div className="dark:bg-white bg-black rounded-full h-6 w-14 flex items-center justify-end px-2">
          <div
            className="svgMask betterhover:group-hover:translate-x-1 transition-all group-active:!translate-x-2 cursor-pointer size-6 rotate-180 dark:bg-black bg-white"
            style={{ maskImage: `url("images/arrow.svg")` }}
          ></div>
        </div>
      </button>
    </form>
  );
};
