import { ManType } from "./07destructuring.test"

type PropsType = {
    title: string
    man: ManType
}
export const ManComponent: React.FC<PropsType> = ({ title, ...props }) => {
    const { name } = props.man
    return (
        <div>
            <h1>{title}</h1>
            <h3>
                {props.man.name}
            </h3>
        </div>
    )
}