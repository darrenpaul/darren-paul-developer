export default function () {
	const { proxy } = useScriptFathomAnalytics()

	function trackEvent(eventName: string) {
		proxy.trackEvent(eventName, { _value: 1 })
	}

	return { trackEvent }
}
