import { ProtoAPI } from "@kb-sanity/proto-kb-types/api";
import { ProtoPlugin } from "@kb-sanity/proto-kb-types/core/ProtoPlugin";

export default class ProtoKBPluginTemplate implements ProtoPlugin {
  public static title = "Proto KB";
  public static description = "Plugin template";
  public static id = "com.protokb.plugin_template";

  constructor(public api: ProtoAPI) {
    api.toolbar.registerButtons(this, [
      {
        name: 'Hello World',
        icon: 'Globe',
        onClick: () => alert('Hello World!'),
      }
    ])
  }
}
