import Navigation from './navigation/navigation'
import Brand from './brand'
 
export default function Aside() {
  return (
    <>
        <aside className={`float-left h-full sticky top-0 w-72 z-50`}>
            <div className="border-r border-solid border-blue-100 dark:border-neutral-700 h-[calc(100vh-16px)] realtive w-auto mr-6 py-2">

            <Brand />
            <Navigation />

            <footer className="">
                <a className="flex absolute bottom-4 mr-12 items-center pt-3 pb-3 pl-4 rounded-xl border border-transparent transition-colors hover:border-blue-100 hover:bg-blue-500/10 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="https://t.me/hanriel">
                  <i className="text-4xl icons-heart mr-3"></i>
                  <span className="text-sm">Сделано с любовью Федосеев&nbsp;Д.А.</span>
                </a>
            </footer>
            </div>            
        </aside>
    </>
  )
}