import { Compiler, Stats } from "webpack";
import { compilation as compilationType } from "webpack";
type ExtractorFunction = (content: string) => string[];
interface Extractors {
    extensions: string[];
    extractor: ExtractorFunction;
}
type PathFunction = () => string[];
type WhitelistFunction = () => string[];
type WhitelistPatternsFunction = () => Array<RegExp>;
interface UserDefinedOptions {
    paths: string[] | PathFunction;
    defaultExtractor?: ExtractorFunction;
    extractors?: Array<Extractors>;
    fontFace?: boolean;
    keyframes?: boolean;
    moduleExtensions?: string[];
    output?: string;
    rejected?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    variables?: boolean;
    verbose?: boolean;
    whitelist?: string[] | WhitelistFunction;
    whitelistPatterns?: Array<RegExp> | WhitelistPatternsFunction;
    whitelistPatternsChildren?: Array<RegExp> | WhitelistPatternsFunction;
    only?: string[];
}
type PurgedStats = {
    [index: string]: string[];
};
interface PurgeAsset {
    asset: {
        source: () => string;
    };
    name: string;
}
type Compilation = compilationType.Compilation;
declare class PurgeCSSPlugin {
    options: UserDefinedOptions;
    purgedStats: PurgedStats;
    constructor(options: UserDefinedOptions);
    apply(compiler: Compiler): void;
    onHooksDone(stats: Stats, callback: () => void): void;
    getAssetsToPurge(assetsFromCompilation: PurgeAsset[], files: string[]): PurgeAsset[];
    initializePlugin(compilation: Compilation): void;
    runPluginHook(compilation: Compilation, entryPaths: string[]): Promise<void>;
}
export { PurgeCSSPlugin as default };
