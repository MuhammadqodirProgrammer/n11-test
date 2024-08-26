
export const User = (props) => {
    const { name, age, address, clickerFunc } = props?.userObj
    return (
        <div className=' border border-red-500   ' >
            <h1 className=' text-bold    '> Name: {name}  </h1>
            <p className=' text-bold    '> age : {age}   </p>
            <p className=' text-bold    '> adress : {address}  </p>
            <a href="/about">link</a>
            <hr />
        </div>
    )
}
