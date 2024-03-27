import React from "react";

export default function book(props){
    return(
        <div>
            <h3>{'이 책의 이름은 $(props.name)입니다.'}</h3>
            <h3>{'이 책의 이름은 $(props.name)입니다.'}</h3>


        </div>

    );

}
export default function Clock(props){
    return(
        <div>
            <h1>
                현재시간: {new Date().toLocaleTimeString()}
            </h1>
        </div>
    )
}
expor