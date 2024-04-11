import githubLogo from "../assets/github/github-mark-white.svg";

interface Props{
    params: {
        sideSize: string,
        borderRadius: string,
    }
}

export default function WrappedImage({ params }: Props){
    
    const divStyle = {
        width: params.sideSize,
        height: params.sideSize,
        borderRadius: params.borderRadius,
        backgroundImage: `url(${githubLogo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    
    return (
        <div style={divStyle}>
            
        </div>
    )
}