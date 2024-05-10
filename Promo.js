export default function Promo() {
    return (
      <div className="relative overflow-hidden bg-gray-900">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
              Discover the games you want,
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              from exclusive blockbusters to innovative indies, all brought to life with the power of the PS5™ console.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-gt7-hub-image-block-02-en-10mar22?$600px--t$"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-ratchet-and-clank-rift-apart-image-block-en-26aug22?$600px--t$"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/minecraft-squareboxart-01-ps4-05dec19-en?$600px--t$"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/cyberpunk-2077-store-art-01-en-9mar22?$600px--t$"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://sm.ign.com/t/ign_gr/game/h/hitman-3/hitman-3_3wqk.1200.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-uncharted-hub-image-block-01-en-17sep21?$600px--t$"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-uncharted-hub-image-block-02-en-21oct21?$600px--t$"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="inline-block rounded-md border border-transparent bg-indigo-700 px-8 py-3 text-center font-medium text-white ">
                  Shop Collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  