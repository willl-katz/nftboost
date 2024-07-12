import Image from "next/image";
import IconHeart from '@/assets/icon-heart.svg';
import IconVerify from '@/assets/verify.svg';
import IconEth from '@/assets/icon-eth.svg';
import IconClock from '@/assets/icon-clock.svg';

export default function CardNFT({thumbnail, name, valueEth, valueReal}) {
    return (
        <div className="w-full max-w-card-nft overflow-hidden rounded-2xl border-gray-border-nft border bg-gray-area-favorite">
            <div className="relative w-full h-area-image-nft overflow-hidden">
                <Image
                    src={thumbnail}
                    alt="Nft 01"
                    className="w-full h-full object-cover"
                    quality='90'
                />
                <div className="absolute top-2 right-2 z-10 flex items-center gap-2 py-3 px-6 bg-gray-area-favorite rounded-full border-gray-border-nft border">
                    <Image
                        src={IconHeart}
                        alt="Icon Heart"
                    />
                    <small>0</small>
                </div>
            </div>
            <div className="w-full p-4">
                <h4 className="flex items-center gap-1 text-xs mb-1">
                    Cartoon Collection
                <Image
                    src={IconVerify}
                    alt="Icon Verify"
                    className="ml-[0.025rem]"
                />
                </h4>
                <h3 className="text-lg/none font-semibold mb-4">{name}</h3>
                <div className="flex items-end justify-between mb-4">
                    <div className="space-y-1">
                        <span className="text-xs text-white text-opacity-70">Preço atual</span>
                        <h3 className="flex items-center gap-1 text-lg font-semibold">
                            <Image
                                src={IconEth}
                                alt="Icon Ethereum"
                            />
                            {valueEth} BTC
                        </h3>
                    </div>
                    <h5 className="relative bottom-1 text-xs font-medium">R$ {valueReal}</h5>
                </div>
                <button className="w-full py-4 bg-blue-primary rounded-full mb-4 text-sm font-semibold hover:bg-blue-600 transition-all ease-linear">Buy now</button>
                <div className="flex items-center gap-1">
                    <Image
                        src={IconClock}
                        alt="Icon tempo de venda"
                    />
                    <p className="text-xs">Fim em 4h 8m 22s</p>
                </div>
            </div>
        </div>
    );
}