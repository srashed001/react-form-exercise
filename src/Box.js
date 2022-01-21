
import './Box.css'

const Box = ({ color = 'red', width = 100, height=100}) => {
    const style = {
        backgroundColor: color, 
        width: `${width}px`,
        height: `${height}px`
    }
    return (
        <div 
        className="Box" 
        style={style}
        data-testid="box"
        >

        </div>
    )

}

export default Box