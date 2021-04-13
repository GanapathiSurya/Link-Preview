import React from 'react'
import {Link} from "react-router-dom";
export default function Home() {
    return (
        <div>
            <Link to="/method1">
                Method1
            </Link>
            
            <Link to="/method2">
                Method2
            </Link>
            
            <Link to="/method3">
                Method3
            </Link>
        </div>
    )
}
