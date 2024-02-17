import React from 'react'

const Login= () => {
  return (
  
   
    <div class="bg-malek bg-cover w-screen text-white flex min-h-screen flex-col items-center mr-[130px] pt-16 sm:justify-center sm:pt-0">
      <div className="flex space-x-8 mt-[1cm] top-0 fixed w-full  p-4 justify-center">
     <h1 className="text-xl text-white font-jakarta">HOME</h1>
     <h1 className="text-xl text-white  font-jakarta">PROFILE</h1>
     <h1 className="text-xl text-white  font-jakarta">ABOUT US</h1>
     <h1 className="text-xl text-white  font-jakarta">CONTACT </h1>
</div>


    <a href="#">
        <div class="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2 ml-[60px]">
            
            <img  src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417653800_771342754913756_515758657566049752_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=7p6OH5hM2iwAX-0O_kb&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTdDa4KmO8EAslGvXUaspUkqFuQLYWEam4vyNz-4brlZg&oe=65F6BFAE" alt="" />
            
           
        </div>
    </a>
    <div class="relative mt-12 w-[15cm]   sm:mt-10">
        <div class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
            bis_skin_checked="1"></div>
        <div
            class="mx-5 bg-black opacity-90  sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div class="flex flex-col p-6">
                <h3 class="text-4xl font-semibold leading-6 tracking-tighter mb-[10px]">Login</h3>
                <p class="mt-1.5 text-xl font-medium text-white/50">Welcome back, enter your credentials to continue.
                </p>
            </div>
            <div class="p-6 pt-0">
                <form>
                    <div>
                        <div>
                            <div
                                class="group relative rounded-lg h-[2cm] border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-[#84cc16]">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xl font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Username</label>
                                    <div class="absolute right-3 translate-y-2 text-green-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="w-6 h-6">
                                                    <path fill-rule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                </div>
                                <input type="text" name="username" placeholder="Username"
                                    autocomplete="off"
                                    class="block w-full border-0 bg-transparent p-0 text-xl file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"/>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div>
                            <div
                                class="group relative rounded-lg h-[2cm] border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-[#84cc16]">
                                <div class="flex justify-between">
                                    <label
                                        class="text-xl font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Password</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="password" name="password" placeholder="xxxx xxxx"
                                        class="block w-full border-0 bg-transparent p-0 text-xl file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <label class="flex items-center gap-2">
                            <input type="checkbox" name="remember" class="form-checkbox text-[#84cc16] focus:ring-[#84cc16] ring-[#84cc16]"/>

                            <span class="text-xl">Remember me</span>
                        </label>
                        <a class="text-xl font-medium text-foreground underline" href="/forgot-password">Forgot
                            password?</a>
                    </div>
                    <div class="mt-4 flex items-center justify-end gap-x-2">
                        <a class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-[#84cc16] h-10 px-4 py-2 duration-200"
                            href="/register">Register</a>
                        <button
                            class="font-semibold hover:bg-black hover:text-[#84cc16] hover:ring hover:ring-[#84cc16] transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#84cc16] text-white h-10 px-4 py-2"
                            type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div>
        
    </div>
</div>

  )
}

export default Login