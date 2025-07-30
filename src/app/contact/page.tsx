import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>
      <h1 className="text-5xl font-bold mb-10 text-red-600">Contact Me</h1>

      <div className="max-w-xl w-full text-center mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
        </p>
        <p className="text-3xl font-bold mb-8">
          Email: <a href="mailto:shardulsingh@example.com" className="text-red-600 hover:underline">shardulsingh@example.com</a>
        </p>

        <form className="bg-[#141414] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 text-lg font-bold mb-2 text-left">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 text-lg font-bold mb-2 text-left">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 text-lg font-bold mb-2 text-left">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex space-x-6">
        <Link href="https://www.linkedin.com/in/shardul-singh-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl">
          {/* Placeholder for LinkedIn icon */}
          <span className="sr-only">LinkedIn</span>
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.567c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.952v5.659H9.157V9.292h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 6.879v7.016zM5.003 8.574a3.509 3.509 0 01-3.507-3.507c0-1.933 1.57-3.507 3.507-3.507 1.934 0 3.507 1.574 3.507 3.507 0 1.933-1.573 3.507-3.507 3.507zM6.76 20.452H3.24V9.292h3.52z"/></svg>
        </Link>
        <Link href="https://github.com/shardulsinghdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl">
          {/* Placeholder for GitHub icon */}
          <span className="sr-only">GitHub</span>
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.25.82-.557 0-.275-.015-1.134-.015-2.232-3.344.721-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.304-.535-1.524.118-3.176 0 0 1-.322 3.295 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.286-1.23 3.286-1.23.653 1.653.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.478 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.89-.015 3.284 0 .309.22.678.825.556C20.565 22.181 24 17.68 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </Link>
        <Link href="https://twitter.com/shardulsinghdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl">
          {/* Placeholder for Twitter/X icon */}
          <span className="sr-only">Twitter/X</span>
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.005 0-5.448 2.443-5.448 5.448 0 .426.048.834.138 1.229-4.522-.225-8.523-2.396-11.218-5.698-.465.79-.737 1.706-.737 2.684 0 1.898.969 3.57 2.445 4.542-.85-.026-1.654-.26-2.36-.649-.006.023-.006.045-.006.069 0 2.641 1.88 4.84 4.38 5.334-.44.12-.903.187-1.378.187-.336 0-.665-.034-.985-.094.695 2.165 2.721 3.738 5.122 3.784-1.879 1.474-4.258 2.36-6.85 2.36-.446 0-.883-.025-1.314-.076 2.435 1.56 5.334 2.47 8.463 2.47 10.16 0 15.74-8.403 15.74-15.74 0-.238-.006-.47-.015-.708.97-.699 1.815-1.57 2.477-2.557z"/></svg>
        </Link>
      </div>
    </div>
  );
} 