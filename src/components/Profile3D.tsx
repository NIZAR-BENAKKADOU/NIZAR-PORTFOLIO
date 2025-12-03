import { useTilt } from '@/hooks/useTilt';

interface Profile3DProps {
    imageUrl: string;
}

const Profile3D = ({ imageUrl }: Profile3DProps) => {
    const { values, onMouseMove, onMouseLeave } = useTilt({
        maxTilt: 10,
        perspective: 1000,
        scale: 1.05,
    });

    return (
        <div
            className="relative w-full max-w-md mx-auto aspect-square card-3d-container"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <div
                className="w-full h-full rounded-3xl overflow-hidden card-3d-content relative shadow-2xl"
                style={{ transform: values.transform }}
            >
                {/* Background Gradient / Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-purple-600 opacity-20 animate-pulse" />

                {/* Image Container */}
                <div className="absolute inset-1 rounded-[20px] overflow-hidden bg-card/50 backdrop-blur-sm border border-white/10">
                    <img
                        src={imageUrl}
                        alt="Profile"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />

                    {/* Overlay Glitch/Tech Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Floating Elements inside the card */}
                    <div className="absolute bottom-6 left-6 right-6 card-floating-item-deep">
                        <div className="glass-card p-4 rounded-xl border-white/10 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-white/90">Online & Coding</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements behind */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-float-slow" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 animate-float-medium" />
        </div>
    );
};

export default Profile3D;
