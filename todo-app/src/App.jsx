import { useEffect, useState, useMemo } from 'react'

import './App.css'

function App() {
  const [tasks, settasks] = useState(()=>{
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : []
  });
  const [text, settext] = useState("");

  const [editingId, setEditingId] = useState(null)

  const [editText, setEditText] = useState("");

  const [filter, setFilter] = useState('all');


  function addTask(text){
    if(!text.trim()) return;
    let newTask = {
      id : Date.now(),
      text : text,
      isChecked : false
    }

    settasks([...tasks, newTask]);
    settext("")
    
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  

  function deleteTask(id){

    const isConfirmed = window.confirm("Are you sure you want to delete this task?");
    if(isConfirmed){
      settasks(tasks.filter(task => task.id !== id))
    }
    
    
  }

  function toggleCheck(id){
    settasks(tasks.map((task)=>{
      if(task.id === id){
        return {...task, isChecked : !task.isChecked}
      }else{
        return task
      }
    }))
  }

  function editTask(id, newTask){
    if(!newTask.trim()) return;
    settasks(tasks.map((task)=>{
      if(task.id === id){
        return {...task, text : newTask}
      }else{
        return task
      }
    }))
    setEditingId(null)
    setEditText("")
  }

  const filteredTasks = useMemo(() =>{
    return tasks.filter(task =>{
    if(filter === 'active') return !task.isChecked;
    if(filter === 'done') return task.isChecked;
    return true;
  });
  
  }, [tasks, filter])
  

  return (
    <div className='bg-[#080d17] min-h-screen min-w-screen sm:p-5 flex flex-col'>
      <div className='bg-[#0f172a] text-[#f1f5f9] flex-1 p-4 w-full sm:max-w-2xl lg:max-w-3xl m-auto sm:rounded-lg'>
        <h1 className='text-3xl font-medium'
        >My Tasks</h1>
        <div className='w-full flex flex-col gap-2 mt-5 sm:flex-nowrap sm:flex-row'>
            {/* --------------------Input ---------------- */}

          <input  className='border border-[#334155] rounded-md h-10 w-full p-3 outline-0 sm:flex-1'
          type="text" value={text} onChange={(e)=> settext(e.target.value)} placeholder='Add a new task...' 
          onKeyDown={(e)=> e.key === "Enter" && addTask(text)} />
          
          <button className='bg-[#6366f1] rounded-md h-10 p-2 w-full sm:w-15 cursor-pointer'
          onClick={() => addTask(text)}>Add</button>
        </div>


        {/* ----------------------------------All Active Done-------------------------------  */}

        <div className='mt-3 flex gap-2'>
          <button onClick={() => setFilter('all')}
          className={`${filter === "all" ? 'bg-[#6366f1]' : 'bg-[#1e293b]' } cursor-pointer border-0 h-9  flex justify-center items-center text-white pl-5 pr-5 rounded-3xl`}>
            All
          </button>
          
          <button onClick={() => setFilter('active')}
          className={`${filter === "active" ? 'bg-[#6366f1]' : 'bg-[#1e293b]' } cursor-pointer border-0 h-9  flex justify-center items-center text-white pl-5 pr-5 rounded-3xl`}>
            Active
          </button>
          <button onClick={() => setFilter('done')}
          className={`${filter === "done" ? 'bg-[#6366f1]' : 'bg-[#1e293b]' } cursor-pointer border-0 h-9  flex justify-center items-center text-white pl-5 pr-5 rounded-3xl`}>
            Done
          </button>

        </div>


          {/* // -----------------------------All Tasks ------------------------------ */}
          <div className='mt-3 flex flex-col gap-2'>
            
            {
              filteredTasks.map((task)=> {
                const isCompleted = task.isChecked;
                const textColor = isCompleted ? 'text-[#64748b]' : 'text-[#f1f5f9]';
                const textDecoration = isCompleted ?  'line-through' : '';
                const checkMark = isCompleted ? "fa-solid fa-circle-check  " : "fa-regular fa-circle";

                

                return (
                <div key={task.id} 
                >
                  <div className={` min-h-14 flex items-center justify-between gap-2 bg-[#1e293b]  p-1.5 rounded-md ${textColor}`} >

                  
                  <i onClick={() => toggleCheck(task.id)}
                  className={`${checkMark} text-2xl cursor-pointer`}></i>
                  {
                    editingId === task.id ?
                    <input className={`bg-black w-full overflow-hidden text-ellipsis indent-1.5 p-1 rounded-md flex-1 outline-0 border border-[#6366f1]`}
                    type="text" value={editText} onChange={(e) => setEditText(e.target.value)} 
                    onKeyDown={(e)=> {
                      if (e.key === 'Enter')  editTask(editingId, editText)
                      if(e.key === 'Escape') setEditingId(null)
                      }}/>
                    :
                    <span className={`flex-1 w-full overflow-hidden text-ellipsis ${textDecoration}`}
                    >{task.text}</span>
                  }
                  {
                    editingId === task.id ?
                    <button className='border-0 h-8 cursor-pointer bg-[#6366f1] flex justify-center items-center text-white p-2 rounded-md'
                    onClick={() => editTask(editingId, editText)}>
                      Save
                    </button>
                    :
                    <div className={`text-xl`}>

                      <button className='p-2'
                      onClick={()=> {setEditText(task.text); setEditingId(task.id)}}>
                        <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
                      </button>
                      <button onClick={() => deleteTask(task.id)}>
                        <i className="fa-solid fa-trash text-[#f43f5e] cursor-pointer "></i>
                      </button>
                    </div>

                  }

                  
                  </div>
                </div>
                )
              })
            }
          </div>
        
      </div>
    </div>
  )
}

export default App
