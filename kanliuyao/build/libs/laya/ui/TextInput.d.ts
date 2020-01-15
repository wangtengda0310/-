import { Label } from "./Label";
import { AutoBitmap } from "./AutoBitmap";
/**
 * 输入文本后调度。
 * @eventType Event.INPUT
 */
/**
 * 在输入框内敲回车键后调度。
 * @eventType Event.ENTER
 */
/**
 * 当获得输入焦点后调度。
 * @eventType Event.FOCUS
 */
/**
 * 当失去输入焦点后调度。
 * @eventType Event.BLUR
 */
/**
 * <code>TextInput</code> 类用于创建显示对象以显示和输入文本。
 *
 * @example <caption>以下示例代码，创建了一个 <code>TextInput</code> 实例。</caption>
 * package
 *	{
 *		import laya.display.Stage;
 *		import laya.ui.TextInput;
 *		import laya.utils.Handler;
 *		public class TextInput_Example
 *		{
 *			public function TextInput_Example()
 *			{
 *				Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
 *				Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
 *				Laya.loader.load(["resource/ui/input.png"], Handler.create(this, onLoadComplete));//加载资源。
 *			}
 *			private function onLoadComplete():void
 *			{
 *				var textInput:TextInput = new TextInput("这是一个TextInput实例。");//创建一个 TextInput 类的实例对象 textInput 。
 *				textInput.skin = "resource/ui/input.png";//设置 textInput 的皮肤。
 *				textInput.sizeGrid = "4,4,4,4";//设置 textInput 的网格信息。
 *				textInput.color = "#008fff";//设置 textInput 的文本颜色。
 *				textInput.font = "Arial";//设置 textInput 的文本字体。
 *				textInput.bold = true;//设置 textInput 的文本显示为粗体。
 *				textInput.fontSize = 30;//设置 textInput 的字体大小。
 *				textInput.wordWrap = true;//设置 textInput 的文本自动换行。
 *				textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
 *				textInput.y = 100;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
 *				textInput.width = 300;//设置 textInput 的宽度。
 *				textInput.height = 200;//设置 textInput 的高度。
 *				Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
 *			}
 *		}
 *	}
 * @example
 * Laya.init(640, 800);//设置游戏画布宽高
 * Laya.stage.bgColor = "#efefef";//设置画布的背景颜色
 * Laya.loader.load(["resource/ui/input.png"], laya.utils.Handler.create(this, onLoadComplete));//加载资源。
 * function onLoadComplete() {
 *     var textInput = new laya.ui.TextInput("这是一个TextInput实例。");//创建一个 TextInput 类的实例对象 textInput 。
 *     textInput.skin = "resource/ui/input.png";//设置 textInput 的皮肤。
 *     textInput.sizeGrid = "4,4,4,4";//设置 textInput 的网格信息。
 *     textInput.color = "#008fff";//设置 textInput 的文本颜色。
 *     textInput.font = "Arial";//设置 textInput 的文本字体。
 *     textInput.bold = true;//设置 textInput 的文本显示为粗体。
 *     textInput.fontSize = 30;//设置 textInput 的字体大小。
 *     textInput.wordWrap = true;//设置 textInput 的文本自动换行。
 *     textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
 *     textInput.y = 100;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
 *     textInput.width = 300;//设置 textInput 的宽度。
 *     textInput.height = 200;//设置 textInput 的高度。
 *     Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
 * }
 * @example
 * import Stage = laya.display.Stage;
 * import TextInput = laya.ui.TextInput;
 * import Handler = laya.utils.Handler;
 * class TextInput_Example {
 *     constructor() {
 *         Laya.init(640, 800);//设置游戏画布宽高、渲染模式。
 *         Laya.stage.bgColor = "#efefef";//设置画布的背景颜色。
 *         Laya.loader.load(["resource/ui/input.png"], Handler.create(this, this.onLoadComplete));//加载资源。
 *     }
 *     private onLoadComplete(): void {
 *         var textInput: TextInput = new TextInput("这是一个TextInput实例。");//创建一个 TextInput 类的实例对象 textInput 。
 *         textInput.skin = "resource/ui/input.png";//设置 textInput 的皮肤。
 *         textInput.sizeGrid = "4,4,4,4";//设置 textInput 的网格信息。
 *         textInput.color = "#008fff";//设置 textInput 的文本颜色。
 *         textInput.font = "Arial";//设置 textInput 的文本字体。
 *         textInput.bold = true;//设置 textInput 的文本显示为粗体。
 *         textInput.fontSize = 30;//设置 textInput 的字体大小。
 *         textInput.wordWrap = true;//设置 textInput 的文本自动换行。
 *         textInput.x = 100;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
 *         textInput.y = 100;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
 *         textInput.width = 300;//设置 textInput 的宽度。
 *         textInput.height = 200;//设置 textInput 的高度。
 *         Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
 *     }
 * }
 */
export declare class TextInput extends Label {
    /** @private */
    protected _bg: AutoBitmap;
    /** @private */
    protected _skin: string;
    /**
     * 创建一个新的 <code>TextInput</code> 类实例。
     * @param text 文本内容。
     */
    constructor(text?: string);
    /**
     * @inheritDoc
     * @override
    */
    protected preinitialize(): void;
    /**
     * @inheritDoc
     * @override
    */
    destroy(destroyChild?: boolean): void;
    /**
     * @inheritDoc
     * @override
    */
    protected createChildren(): void;
    /**
     * @private
     */
    private _onFocus;
    /**
     * @private
     */
    private _onBlur;
    /**
     * @private
     */
    private _onInput;
    /**
     * @private
     */
    private _onEnter;
    /**
     * @inheritDoc
     * @override
    */
    protected initialize(): void;
    /**
     * 表示此对象包含的文本背景 <code>AutoBitmap</code> 组件实例。
     */
    bg: AutoBitmap;
    /**
     * @copy laya.ui.Image#skin
     */
    skin: string;
    protected _skinLoaded(): void;
    /**
     * <p>当前实例的背景图（ <code>AutoBitmap</code> ）实例的有效缩放网格数据。</p>
     * <p>数据格式："上边距,右边距,下边距,左边距,是否重复填充(值为0：不重复填充，1：重复填充)"，以逗号分隔。
     * <ul><li>例如："4,4,4,4,1"</li></ul></p>
     * @see laya.ui.AutoBitmap.sizeGrid
     */
    sizeGrid: string;
    /**
     * 当前文本内容字符串。
     * @see laya.display.Text.text
     * @override
     */
    text: string;
    /**
     * @inheritDoc
     * @override
    */
    width: number;
    /**
     * @inheritDoc
     * @override
    */
    height: number;
    /**
     * <p>指示当前是否是文本域。</p>
     * 值为true表示当前是文本域，否则不是文本域。
     */
    multiline: boolean;
    /**
     * 设置可编辑状态。
     */
    editable: boolean;
    /**选中输入框内的文本。*/
    select(): void;
    /**限制输入的字符。*/
    restrict: string;
    /**
     * @copy laya.display.Input#prompt
     */
    prompt: string;
    /**
     * @copy laya.display.Input#promptColor
     */
    promptColor: string;
    /**
     * @copy laya.display.Input#maxChars
     */
    maxChars: number;
    /**
     * @copy laya.display.Input#focus
     */
    focus: boolean;
    /**
     * @copy laya.display.Input#type
     */
    type: string;
    setSelection(startIndex: number, endIndex: number): void;
}
