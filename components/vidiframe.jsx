
export default function VideoComponent({ videoId }) {
    const videoUrl = `https://player.vimeo.com/video/${videoId}`;
    return (
        <div style={{ padding: '56.25% 0 0 0', overflow: 'hidden' }}>
            <iframe
                src={videoUrl}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allow="fullscreen"
                allowFullScreen
                title="Vimeo video"
            />
        </div>
    );
}