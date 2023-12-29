import { useState } from "react";

function InputText(prop: any){
    if (prop.active =="true"){
        return (
            <div>
                {prop.text}
            </div>
        );
    }
    else if (prop.active == "false"){
    }
}

export default InputText;