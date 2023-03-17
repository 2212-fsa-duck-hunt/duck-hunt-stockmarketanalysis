"use client"

//everything renders server side automatically. use "use client" if you want to do hooks or smth on the client side
//next js automatically helps u throw an error page after a couple of attempts!

export default function Error({ error, reset }) {
    return (
        <div>

            HEHEHEHOOHHOO: {error.message}
            <button onClick={() => reset()}></button>
        </div>
    )
}

