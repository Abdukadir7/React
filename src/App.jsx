import './App.css'

function App() {
  return (
    <div className="bg-blue-500 p-5 flex flex-row justify-start w-50 h-screen">
      <div className="side-bar-branding text-white mr-10">
        <ul className="space-y-4">
          <li><a className='text-white hover:text-gray-300' href="#">Home</a></li>
          <li><a className='text-white hover:text-gray-300' href="#">About</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
