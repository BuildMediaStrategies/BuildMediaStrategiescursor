import { InfiniteSlider } from './motion-primitives/infinite-slider';
import { ProgressiveBlur } from './motion-primitives/progressive-blur';

export default function LogoCloud() {
    return (
        <section className="bg-black overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm text-white">Trusted by businesses that scale</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-12 w-fit brightness-0 invert"
                                    src="/assets/ucl-logo@2x.png"
                                    alt="UCL Logo"
                                    height="48"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-10 w-fit brightness-0 invert"
                                    src="/assets/HAMILTON NEXUS.png"
                                    alt="Hamilton Nexus Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 w-fit brightness-0 invert"
                                    src="/assets/github logo.png"
                                    alt="GitHub Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-12 w-fit brightness-0 invert"
                                    src="/assets/Cursor-Ai-Logo-PNG-SVG-Vector-300x300-1.png"
                                    alt="Cursor AI Logo"
                                    height="48"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-12 w-fit brightness-0 invert"
                                    src="/assets/SOS NEW TP LOGO.png"
                                    alt="SOS Logo"
                                    height="48"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 w-fit brightness-0 invert"
                                    src="/assets/ucl-logo@2x.png"
                                    alt="UCL Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-14 w-fit brightness-0 invert"
                                    src="/assets/HAMILTON NEXUS.png"
                                    alt="Hamilton Nexus Logo"
                                    height="56"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-12 w-fit brightness-0 invert"
                                    src="/assets/github logo.png"
                                    alt="GitHub Logo"
                                    height="48"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-gradient-to-r from-black absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-gradient-to-l from-black absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}