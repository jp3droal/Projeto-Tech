import './Section.css'

export default function Section({ title, titleAlign = 'left', classe, children }) {
    return (
        <section>
            <div className={classe}>
                <div className='sectionTitles'>
                    <h2 style={{ textAlign: titleAlign }}>{title}</h2>
                </div>

                <div className='sectionContent'>
                    {children}
                </div>
            </div>
        </section>
    )
}