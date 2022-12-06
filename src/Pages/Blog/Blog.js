import React from "react";

const Blog = () => {
  return (
    <div className="bg-green-100">
      <h1 className="text-center text-4xl font-bold mt-10  text-purple-600">
        Our Blogs
      </h1>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className=" font-bold text-xl">1.what is cors?</h2>
          <p className="font-bold ">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources.
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl ">
            {" "}
            2.Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="font-bold">
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together. Firebase Authentication provides backend
            services, easy-to-use SDKs, and ready-made UI libraries to
            authenticate users to your app. It supports authentication using
            passwords, phone numbers, popular federated identity providers like
            Google, Facebook and Twitter, and more.Firebase provides tools to
            grow your app and business, for startups & global enterprises. Get
            your app up and running quickly & securely with fully managed
            backend infrastructure. Release Apps Confidently. Cross-Platform
            Solutions. Boost App Engagement.
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl">
            3.How does the private route work?
          </h2>
          <p className="font-bold">
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property
          </p>
        </div>
      </div>
      <div className="card w-[70%] mx-auto bg-sky-300 shadow-xl my-10">
        <div className="card-body">
          <h2 className="font-bold text-xl">
            4.What is Node? How does Node work?
          </h2>
          <p className="font-bold">
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return. What is node and
            how it works? .What is Node? How does Node work  It is
            used as backend service where javascript works on the server-side of
            the application. This way javascript is used on both frontend and
            backend. Node. js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast,
            and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
