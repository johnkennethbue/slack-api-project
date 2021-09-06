import React from 'react'

function Homepage() {
    return (
        <section className="grid grid-cols-12 grid-rows-auto">
            <div className="border col-span-3 flex gap-2 p-4 items-center justify-around text-white bg-pink-600">
                <div>
                    <button className="m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
                <div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className="border col-span-9 flex items-center gap-2 p-4 justify-between text-white bg-pink-600">
                <div className="flex gap-4 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>username/name HERE<br /><span className="text-gray-100">last login date, time/ last user session</span></div>
                </div>
                <div className="flex gap-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className=" border grid grid-rows-auto col-span-3 row-start-2 bg-red-50">
                        <div className=" border m-0 row-start-1 h-1/2 bg-pink-600 text-white">
                            <div className="border">Channels</div>
                                <div className="flex p-2 gap-2">
                                    <div className="p-2">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-2">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>                
                                    <div className="p-2">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>                
                                </div>
                        </div>
                        <div className="border row-start-2 bg-pink-600 text-white -mt-64">
                                <div className="border">Direct Messages</div>
                                <div>
                                    <div className="py-4 border ">user_1</div>
                                    <div className="py-4 border ">user_2</div>
                                    <div className="py-4 border ">user_3</div>
                                    <div className="py-4 border ">user_4</div>
                                    <div className="py-4 border ">user_5</div>
                                </div>
                        </div>
            </div>
            <div className="border grid h-screen col-span-9 flex">
                <div className=" row-span-6 p-4 h-full">
                    CHATBOX
                </div>
                <div className="border px-4 h-16 bg-pink-600 gap-6">
                    <input
                        className="border w-11/12 mx-2 h-10" 
                        type="text"
                        placeholder="Enter a message"
                    />
                    <button className="px-4 py-2 mt-2 bg-pink-400 border rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" m-0 h-5 w-5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button></div>
            </div>
        </section>
    )
}

export default Homepage