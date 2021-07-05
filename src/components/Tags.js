const Tags = ({ tags , action, submit})=>{
    return (
        <div className="
            p-3 m-3
        ">
            <div className="
                flex flex-row
            ">
                <input value={ tags } className="
                    p-4 w-full text-black
                " type="text" placeholder="tags"
                onChange = {action}
                />
                <button 
                onClick = {submit}
                className="
                    bg-green-400 p-4
                ">Submit</button>
            </div>
        </div>
    );
}
export default Tags;