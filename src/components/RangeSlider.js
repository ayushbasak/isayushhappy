const RangeSlider = ({text, action})=>{
    return (
        <div className="
                flex flex-row
        ">
            <p className="
                text-sm md:text-2xl lg:text-3xl p-3 m-2
            ">{text}</p>
            <input className="
                p-4
            " type="range" min = "0" max ="9" id = {text} onChange={action}/>
        </div>
    );
}
export default RangeSlider;