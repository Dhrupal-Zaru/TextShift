import React from 'react'

export default function About(props) {
    return (
        <>
        <div className="container p-3">
            <div className="card" style={{backgroundColor:props.mode==='light'?'white':'#6D6F70', color:props.mode==='light'?'black':'white',borderColor: props.mode==='light'?'black':'white' }}>
                <h5 className="card-header">About Us</h5>
                <div className="card-body">
                    <p className="card-text">TextShift is a user-friendly and efficient web application designed to simplify text formatting
                        tasks such as converting text to uppercase, lowercase, Capital case, and more. Whether you're a student,
                        writer, developer, or professional who frequently works with text, TextShift offers a seamless experience to transform
                        your content with just a click.</p>
                    <h5 className="card-title">Key Features:</h5>
                    <p className="card-text">1 .Text Conversion Options - Easily convert text into different formats:1. Uppercase: Converts all characters to capital letters (HELLO WORLD).
                        2. Lowercase: Converts all characters to lowercase (hello world).
                        3. Capital Case: Capitalizes the first letter of each word (Hello World).</p>
                    <p className="card-text">2 .Instant Copy & Clear Buttons - Users can quickly copy the converted text or reset the input field for a new transformation.</p>
                    <p className="card-text">3 .Live Preview & Real-Time Changes - See the transformed text instantly as you type.</p>
                    <p className="card-text">4 .Mobile-Friendly & Responsive - Designed for all screen sizes, ensuring a smooth experience on desktops, tablets, and smartphones.</p>
                    <p className="card-text">5 .No Login Required - Directly use all features without needing to sign up.</p>
                    <h5 className="card-title">Use Cases:</h5>
                    <p className="card-text">Writers & Content Creators: Easily adjust text formatting for articles and social media posts. Developers: Convert text for
                        consistent formatting in programming and documentation. Students & Academics: Properly format assignments, essays,
                        or research papers. Social Media Users: Create stylized text for posts, bios, and captions. </p>
                    <h5 className="card-title">How it works?</h5>
                    <p className="card-text">Type or paste your text into the input box. Click on the desired conversion button.
                        Instantly see the transformed text in the output section.
                        Copy the formatted text or clear the field to enter a new text.</p>
                    <p className="card-text">
                    TextShift is designed to be fast, intuitive, and accessible, helping users format text efficiently with minimal effort. Whether you're preparing a formal document, 
                    working on a programming project, or just having fun with text styles, TextShift is the perfect tool for quick and hassle-free text transformations.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
