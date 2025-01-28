export default function () {
	const { proxy } = useScriptFathomAnalytics()

	function trackEvent(
		eventName: string,
		eventData: Record<string, string | number> = {},
	) {
		proxy.trackEvent(eventName)
	}

	return { trackEvent }
}
