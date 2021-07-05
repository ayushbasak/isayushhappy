import RangeSlider from './RangeSlider'
import Tags from './Tags'
const Form = ({ actions , tags, submit})=>{
    return (
        <div className="
            bg-blue-500 text-white
            flex flex-col
            justify-center items-center
            w-11/12 lg:w-5/12
            rounded-xl
        ">
            <RangeSlider text="Happiness" action={actions[0]}/>
            <RangeSlider text="Health" action={actions[1]}/>
            <RangeSlider text="Productivity" action={actions[2]}/>
            <Tags tags={tags} action={actions[3]} submit = {submit}/>
        </div>
    );
}

export default Form;