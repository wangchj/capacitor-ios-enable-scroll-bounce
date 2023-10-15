/**
 * Logic to enable WebView scroll bounce on iOS.
 *
 * This code is copied from https://github.com/ionic-team/capacitor/issues/2334
 */

import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(EnableScrollBouncePlugin)
public class EnableScrollBouncePlugin: CAPPlugin {
    private let implementation = EnableScrollBounce()

    @objc override public func load() {
        // Called when the plugin is first constructed in the bridge
        self.bridge?.webView?.scrollView.bounces = true
    }

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
