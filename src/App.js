import "./styles/output.css";

function App() {
  return (
    <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white">Hello Tailwind 👋</h1>
      <p className="text-gray-400 mt-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
      <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
        Hello Friends 🚀
      </button>
      <br />
      <figure>
        <img
          class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="rounded-lg font-semibold text-white">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-green-600">Justis Gipson</div>
            <div class="text-gray-500">Developer, Codelicious</div>
          </figcaption>
        </div>
      </figure>
      <div>
        <p class="font-semibold text-green-600">Shadows</p>
        <ul class="grid grid-cols-2 gap-4">
          <li>
            <div class="shadow-sm bg-white rounded-lg h-18"></div>
          </li>
          <li>
            <div class="shadow bg-white rounded-lg h-18"></div>
          </li>
          <li>
            <div class="shadow-md bg-white rounded-lg h-18"></div>
          </li>
          <li>
            <div class="shadow-lg bg-white rounded-lg h-18"></div>
          </li>
          <li>
            <div class="shadow-xl bg-white rounded-lg h-18"></div>
          </li>
          <li>
            <div class="shadow-2xl bg-white rounded-lg h-18"></div>
          </li>
        </ul>
      </div>
      <div>
        <p class="font-semibold text-green-600">Colors</p>
        <ul class="space-y-3">
          <li>
            <ul class="grid grid-cols-10 h-7">
              <li class="bg-red-50"></li>
              <li class="bg-red-100"></li>
              <li class="bg-red-200"></li>
              <li class="bg-red-300"></li>
              <li class="bg-red-400"></li>
              <li class="bg-red-500"></li>
              <li class="bg-red-600"></li>
              <li class="bg-red-700"></li>
              <li class="bg-red-800"></li>
              <li class="bg-red-900"></li>
            </ul>
          </li>
          <li>
            <ul class="grid grid-cols-10 h-7">
              <li class="bg-yellow-50"></li>
              <li class="bg-yellow-100"></li>
              <li class="bg-yellow-200"></li>
              <li class="bg-yellow-300"></li>
              <li class="bg-yellow-400"></li>
              <li class="bg-yellow-500"></li>
              <li class="bg-yellow-600"></li>
              <li class="bg-yellow-700"></li>
              <li class="bg-yellow-800"></li>
              <li class="bg-yellow-900"></li>
            </ul>
          </li>
          <li>
            <ul class="grid grid-cols-10 h-7">
              <li class="bg-green-50"></li>
              <li class="bg-green-100"></li>
              <li class="bg-green-200"></li>
              <li class="bg-green-300"></li>
              <li class="bg-green-400"></li>
              <li class="bg-green-500"></li>
              <li class="bg-green-600"></li>
              <li class="bg-green-700"></li>
              <li class="bg-green-800"></li>
              <li class="bg-green-900"></li>
            </ul>
          </li>
          <li>
            <ul class="grid grid-cols-10 h-7">
              <li class="bg-blue-50"></li>
              <li class="bg-blue-100"></li>
              <li class="bg-blue-200"></li>
              <li class="bg-blue-300"></li>
              <li class="bg-blue-400"></li>
              <li class="bg-blue-500"></li>
              <li class="bg-blue-600"></li>
              <li class="bg-blue-700"></li>
              <li class="bg-blue-800"></li>
              <li class="bg-blue-900"></li>
            </ul>
          </li>
          <li>
            <ul class="grid grid-cols-10 h-7">
              <li class="bg-purple-50"></li>
              <li class="bg-purple-100"></li>
              <li class="bg-purple-200"></li>
              <li class="bg-purple-300"></li>
              <li class="bg-purple-400"></li>
              <li class="bg-purple-500"></li>
              <li class="bg-purple-600"></li>
              <li class="bg-purple-700"></li>
              <li class="bg-purple-800"></li>
              <li class="bg-purple-900"></li>
            </ul>
          </li>
          <li>
            <ul class="grid grid-cols-10 h-7">
              <li class="bg-pink-50"></li>
              <li class="bg-pink-100"></li>
              <li class="bg-pink-200"></li>
              <li class="bg-pink-300"></li>
              <li class="bg-pink-400"></li>
              <li class="bg-pink-500"></li>
              <li class="bg-pink-600"></li>
              <li class="bg-pink-700"></li>
              <li class="bg-pink-800"></li>
              <li class="bg-pink-900"></li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
      <p class="font-semibold text-green-600">Sizing</p>
        <ul class="space-y-4">
          <li>
            <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div class="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;
