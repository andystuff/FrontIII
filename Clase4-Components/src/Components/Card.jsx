function Card(props) {
    return(
        <article className="card-padre">
            {props.title ? <h1>{props.title}</h1> : undefined}
            <section className="card-body">{props.children}</section>
            {props.foooter ? <section className="card-footer">{props.footer}</section> : undefined}

        </article>
    )
    
}
export default Card