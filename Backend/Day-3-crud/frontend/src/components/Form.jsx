

const Form = () => { 

  return (
    <div>
        
        Form 
        <form >
             <div>
                 <label htmlFor="name">Name</label>
                 <input type="text" id="name" />
             </div>
             <div>
                <label htmlFor="age">Age </label>
                <input type="number" id="age" />
            </div>

            <div>
                <label htmlFor="profession">Profession</label>
                <input type="text" id="profession" />
            </div>

            <button type="submit">Submit</button> 
        </form>

    </div>
  )
}

export default Form