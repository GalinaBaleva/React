import { forwardRef } from "react";

export default forwardRef(function FormComponent(props, ref) {
    return(
        <form ref={ref} onSubmit={props.onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" />

            {/* If necessary, you can add other elements here*/}
        </form>
    )
});