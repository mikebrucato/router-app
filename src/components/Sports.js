import { Route, NavLink, useRouteMatch } from "react-router-dom";
import sportsData from '../data/sportsData'
import Sport from './Sport'

export default function Sports() {
    let { url } = useRouteMatch()
    const links = sportsData.map(sport => (
        <li>
            <NavLink to={`${url}/${sport.id}`}>{sport.title}</NavLink>
        </li>
    ))

    return (
        <div>
            <h2>Sports</h2>
            <ul>{links}</ul>

            <Route path={`${url}/:id`}>
                <Sport sportsData={sportsData}/>
            </Route>

        </div>
    )
}

// function Football() {
//     return (
//         <div>
//             <h2>Football</h2>
//         </div>
//     )
// }

// function Soccer() {
//     return (
//         <div>
//             <h2>Soccer</h2>
//         </div>
//     )
// }

// function Baseball() {
//     return (
//         <div>
//             <h2>Baseball</h2>
//         </div>
//     )
// }

// function Basketball() {
//     return (
//         <div>
//             <h2>Basketball</h2>
//         </div>
//     )
// }