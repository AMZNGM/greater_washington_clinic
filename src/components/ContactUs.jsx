import React from "react";
import Form from "./Form.jsx";

const info = [
  {
    id: 1,
    title: "Fairfax",
    tel: "(703) 546-9641",
  },
  {
    id: 2,
    title: "Call us now",
    tel: "(540) 458 890",
  },
  {
    id: 3,
    title: "Call us now",
    tel: "(540) 458 890",
  },
  {
    id: 4,
    title: "Call us now",
    tel: "(540) 458 890",
  },
  {
    id: 5,
    title: "Follow us :",
    youtube: "https://www.youtube.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    id: 6,
    title: "Send us mail",
    email: "Greaterwashington1@gmail.com",
  },
  {
    id: 7,
    title: "Send us mail",
    email: "Greaterwashington1@gmail.com",
  },
  {
    id: 8,
    title: "Send us mail",
    email: "Greaterwashington1@gmail.com",
  },
];

function ContactUs() {
  return (
    <section className="bg-white md:py-15 pb-3">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 items-start">
          <div className="col-span-2 p-4 md:p-0 rounded-lg flex items-center justify-center">
            <Form></Form>
          </div>

          <div className="lg:col-span-1 col-span-2 p-4 md:p-0 rounded-lg flex items-center justify-center">
            <div className="w-full bg-main p-8 rounded-3xl shadow-sm text-white">
              <h2 className="!text-[36px] mb-2">Info</h2>
              <div className="leading-9">
                {info.map((item) => (
                  <div key={item.id} className="!text-[20px]">
                    {item.tel ? (
                      <p>
                        {item.title} :{" "}
                        <a className="hover:text-sec" href={`tel:${item.tel}`}>
                          {item.tel}
                        </a>
                      </p>
                    ) : item.email ? (
                      <p>
                        {item.title} :{" "}
                        <a className="hover:text-sec" href={`mailto:${item.email}`}>
                          {item.email}
                        </a>
                      </p>
                    ) : (
                      <p>{item.title}</p>
                    )}

                    <div className="flex gap-2 mt-2">
                      {item.youtube && (
                        <a
                          className="hov"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.youtube}
                        >
                          <img
                            src="src/assets/images/icons/youtubeIcon.png"
                            alt="youtubeIcon"
                            className="w-6 h-6"
                          />
                        </a>
                      )}
                      {item.facebook && (
                        <a
                          className="hov"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.facebook}
                        >
                          <img
                            src="src/assets/images/icons/Facebook White.png"
                            alt="facebookIcon"
                            className="w-6 h-6"
                          />
                        </a>
                      )}
                      {item.instagram && (
                        <a
                          className="hov"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.instagram}
                        >
                          <img
                            src="src/assets/images/icons/Instagram.png"
                            alt="instagramIcon"
                            className="w-6 h-6"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
