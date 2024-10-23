import {useEffect, useState} from "react";
import * as Network from "expo-network";

export default function Connectivity() {
    const [isConnected, setIsConnected] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkNetwork = async () => {
            const status = await Network.getNetworkStateAsync();
            setIsConnected(status.isConnected);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        checkNetwork().then(() => {});
    }, []);

    return {isConnected, loading};
}