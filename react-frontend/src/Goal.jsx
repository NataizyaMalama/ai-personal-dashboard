function Goal({ text, removeGoal }) {


    return (

        <li>

            🎯 {text}

            <button onClick={removeGoal}>
                Delete
            </button>

        </li>

    )

}


export default Goal