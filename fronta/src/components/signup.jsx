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
                <h3 class="text-4xl font-semibold leading-6 tracking-tighter mb-[10px]">sign up</h3>
                <p class="mt-1.5 text-xl font-medium text-white/50">Welcome, enter your credentials to create an account.
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
                                        class="text-xl font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Email</label>
                                </div>
                                <div class="flex items-center">
                                    <input type="password" name="password" placeholder="xxx.xxx@mail.com"
                                        class="block w-full border-0 bg-transparent p-0 text-xl file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"/>
                                </div>
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
                    <div className="flex space-x-4 mt-[10px]">
                    <p>Already have an account ?</p>
                    <p className='underline'>Login</p>
                    </div>
              
                    <div class="mt-4 flex items-center justify-end gap-x-2">
                       
                        <button
                            class="font-semibold hover:bg-black hover:text-[#84cc16] hover:ring hover:ring-[#84cc16] transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#84cc16] text-white h-10 px-4 py-2"
                            type="submit">Register</button>
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