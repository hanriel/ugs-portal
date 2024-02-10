import Navigation from './navigation/navigation'
import Brand from './brand'
 
export default function Aside() {
  return (
    <>
        <aside className={`float-left h-full sticky top-0 w-72 z-50`}>
            <div className="border-r border-solid border-blue-100 h-[calc(100vh-16px)] realtive w-auto mx-6 py-2">

            <Brand />
            <Navigation />

            <p className="text-xs">Избранные и закрытые разделы будут доступны после <a href="/singin">Авторизации</a></p>
            <footer className="flex absolute bottom-9 mr-6 items-center">
                <a className="nav__link" href="https://t.me/hanriel">
                  <i className="text-4xl icons-heart"></i>
                  <span>Made with love by Fedoseev&nbsp;D.A.</span>
                </a>
            </footer>
            </div>            
        </aside>
    </>
  )
}