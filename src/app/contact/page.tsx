import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex-1 flex">
      <div className="w-full min-h-full lg:bg-[url('/images/OIG44.webp')] bg-cover bg-top flex justify-center items-center flex-col gap-xl">
        <h1 className="font-name text-size-heading font-bold text-shade-five">
          Contact
        </h1>
        <form
          action="post"
          className="flex flex-col justify-center gap-sm font-text text-text min-w-72"
        >
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            className=" border-b-2 border-shade-five text-center md:text-size-xxl text-size-xl font-heading font-medium focus-within:scale-105 transition-all duration-200 outline-0 ring-0"
            required
            placeholder="Name"
          />
          <label htmlFor="mail">E-Mail :</label>
          <input
            type="email"
            name="mail"
            id="mail"
            className="p-2 border-2 rounded-lg border-shade-five focus-within:bg-shade-one focus-within:scale-105 transition-all duration-200 outline-0"
            required
            placeholder="E-Mail"
          />
          <label htmlFor="text">Message :</label>
          <textarea
            name="textarea"
            id="text"
            className="p-2 border-2 rounded-lg border-shade-five min-h-40 focus-within:bg-shade-one focus-within:scale-105 transition-all duration-200 outline-0"
            required
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="p-2 border-2 border-shade-five rounded-lg bg-shade-two shadow-2xl text-text cursor-pointer hover:bg-shade-four hover:text-shade-one transition-colors duration-200"
          />
        </form>
        <section className="flex justify-center items-center gap-md">
          <a
            title="E-mail"
            href="mailto:rguerra1998@gmail.com"
            className="text-shade-five p-2 bg-shade-one rounded-full hover:scale-110 transition-transform duration-200"
          >
            <Mail></Mail>
          </a>
          <a
            title="Phone"
            href="#"
            className="text-shade-five p-2 bg-shade-one rounded-full hover:scale-110 transition-transform duration-200"
          >
            <Phone></Phone>
          </a>
        </section>
      </div>
    </section>
  );
}
