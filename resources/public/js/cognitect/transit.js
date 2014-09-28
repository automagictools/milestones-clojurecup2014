// Compiled by ClojureScript 0.0-2356
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__20546_20550 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__20547_20551 = null;var count__20548_20552 = (0);var i__20549_20553 = (0);while(true){
if((i__20549_20553 < count__20548_20552))
{var k_20554 = cljs.core._nth.call(null,chunk__20547_20551,i__20549_20553);var v_20555 = (b[k_20554]);(a[k_20554] = v_20555);
{
var G__20556 = seq__20546_20550;
var G__20557 = chunk__20547_20551;
var G__20558 = count__20548_20552;
var G__20559 = (i__20549_20553 + (1));
seq__20546_20550 = G__20556;
chunk__20547_20551 = G__20557;
count__20548_20552 = G__20558;
i__20549_20553 = G__20559;
continue;
}
} else
{var temp__4126__auto___20560 = cljs.core.seq.call(null,seq__20546_20550);if(temp__4126__auto___20560)
{var seq__20546_20561__$1 = temp__4126__auto___20560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20546_20561__$1))
{var c__15906__auto___20562 = cljs.core.chunk_first.call(null,seq__20546_20561__$1);{
var G__20563 = cljs.core.chunk_rest.call(null,seq__20546_20561__$1);
var G__20564 = c__15906__auto___20562;
var G__20565 = cljs.core.count.call(null,c__15906__auto___20562);
var G__20566 = (0);
seq__20546_20550 = G__20563;
chunk__20547_20551 = G__20564;
count__20548_20552 = G__20565;
i__20549_20553 = G__20566;
continue;
}
} else
{var k_20567 = cljs.core.first.call(null,seq__20546_20561__$1);var v_20568 = (b[k_20567]);(a[k_20567] = v_20568);
{
var G__20569 = cljs.core.next.call(null,seq__20546_20561__$1);
var G__20570 = null;
var G__20571 = (0);
var G__20572 = (0);
seq__20546_20550 = G__20569;
chunk__20547_20551 = G__20570;
count__20548_20552 = G__20571;
i__20549_20553 = G__20572;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__20573 = (i + (2));
var G__20574 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20573;
ret = G__20574;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__20575_20579 = cljs.core.seq.call(null,v);var chunk__20576_20580 = null;var count__20577_20581 = (0);var i__20578_20582 = (0);while(true){
if((i__20578_20582 < count__20577_20581))
{var x_20583 = cljs.core._nth.call(null,chunk__20576_20580,i__20578_20582);ret.push(x_20583);
{
var G__20584 = seq__20575_20579;
var G__20585 = chunk__20576_20580;
var G__20586 = count__20577_20581;
var G__20587 = (i__20578_20582 + (1));
seq__20575_20579 = G__20584;
chunk__20576_20580 = G__20585;
count__20577_20581 = G__20586;
i__20578_20582 = G__20587;
continue;
}
} else
{var temp__4126__auto___20588 = cljs.core.seq.call(null,seq__20575_20579);if(temp__4126__auto___20588)
{var seq__20575_20589__$1 = temp__4126__auto___20588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20575_20589__$1))
{var c__15906__auto___20590 = cljs.core.chunk_first.call(null,seq__20575_20589__$1);{
var G__20591 = cljs.core.chunk_rest.call(null,seq__20575_20589__$1);
var G__20592 = c__15906__auto___20590;
var G__20593 = cljs.core.count.call(null,c__15906__auto___20590);
var G__20594 = (0);
seq__20575_20579 = G__20591;
chunk__20576_20580 = G__20592;
count__20577_20581 = G__20593;
i__20578_20582 = G__20594;
continue;
}
} else
{var x_20595 = cljs.core.first.call(null,seq__20575_20589__$1);ret.push(x_20595);
{
var G__20596 = cljs.core.next.call(null,seq__20575_20589__$1);
var G__20597 = null;
var G__20598 = (0);
var G__20599 = (0);
seq__20575_20579 = G__20596;
chunk__20576_20580 = G__20597;
count__20577_20581 = G__20598;
i__20578_20582 = G__20599;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__20600_20604 = cljs.core.seq.call(null,v);var chunk__20601_20605 = null;var count__20602_20606 = (0);var i__20603_20607 = (0);while(true){
if((i__20603_20607 < count__20602_20606))
{var x_20608 = cljs.core._nth.call(null,chunk__20601_20605,i__20603_20607);ret.push(x_20608);
{
var G__20609 = seq__20600_20604;
var G__20610 = chunk__20601_20605;
var G__20611 = count__20602_20606;
var G__20612 = (i__20603_20607 + (1));
seq__20600_20604 = G__20609;
chunk__20601_20605 = G__20610;
count__20602_20606 = G__20611;
i__20603_20607 = G__20612;
continue;
}
} else
{var temp__4126__auto___20613 = cljs.core.seq.call(null,seq__20600_20604);if(temp__4126__auto___20613)
{var seq__20600_20614__$1 = temp__4126__auto___20613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20600_20614__$1))
{var c__15906__auto___20615 = cljs.core.chunk_first.call(null,seq__20600_20614__$1);{
var G__20616 = cljs.core.chunk_rest.call(null,seq__20600_20614__$1);
var G__20617 = c__15906__auto___20615;
var G__20618 = cljs.core.count.call(null,c__15906__auto___20615);
var G__20619 = (0);
seq__20600_20604 = G__20616;
chunk__20601_20605 = G__20617;
count__20602_20606 = G__20618;
i__20603_20607 = G__20619;
continue;
}
} else
{var x_20620 = cljs.core.first.call(null,seq__20600_20614__$1);ret.push(x_20620);
{
var G__20621 = cljs.core.next.call(null,seq__20600_20614__$1);
var G__20622 = null;
var G__20623 = (0);
var G__20624 = (0);
seq__20600_20604 = G__20621;
chunk__20601_20605 = G__20622;
count__20602_20606 = G__20623;
i__20603_20607 = G__20624;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__20625_20629 = cljs.core.seq.call(null,v);var chunk__20626_20630 = null;var count__20627_20631 = (0);var i__20628_20632 = (0);while(true){
if((i__20628_20632 < count__20627_20631))
{var x_20633 = cljs.core._nth.call(null,chunk__20626_20630,i__20628_20632);ret.push(x_20633);
{
var G__20634 = seq__20625_20629;
var G__20635 = chunk__20626_20630;
var G__20636 = count__20627_20631;
var G__20637 = (i__20628_20632 + (1));
seq__20625_20629 = G__20634;
chunk__20626_20630 = G__20635;
count__20627_20631 = G__20636;
i__20628_20632 = G__20637;
continue;
}
} else
{var temp__4126__auto___20638 = cljs.core.seq.call(null,seq__20625_20629);if(temp__4126__auto___20638)
{var seq__20625_20639__$1 = temp__4126__auto___20638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20625_20639__$1))
{var c__15906__auto___20640 = cljs.core.chunk_first.call(null,seq__20625_20639__$1);{
var G__20641 = cljs.core.chunk_rest.call(null,seq__20625_20639__$1);
var G__20642 = c__15906__auto___20640;
var G__20643 = cljs.core.count.call(null,c__15906__auto___20640);
var G__20644 = (0);
seq__20625_20629 = G__20641;
chunk__20626_20630 = G__20642;
count__20627_20631 = G__20643;
i__20628_20632 = G__20644;
continue;
}
} else
{var x_20645 = cljs.core.first.call(null,seq__20625_20639__$1);ret.push(x_20645);
{
var G__20646 = cljs.core.next.call(null,seq__20625_20639__$1);
var G__20647 = null;
var G__20648 = (0);
var G__20649 = (0);
seq__20625_20629 = G__20646;
chunk__20626_20630 = G__20647;
count__20627_20631 = G__20648;
i__20628_20632 = G__20649;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x20659 = cljs.core.clone.call(null,handlers);x20659.forEach = ((function (x20659,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__20660 = cljs.core.seq.call(null,coll);var chunk__20661 = null;var count__20662 = (0);var i__20663 = (0);while(true){
if((i__20663 < count__20662))
{var vec__20664 = cljs.core._nth.call(null,chunk__20661,i__20663);var k = cljs.core.nth.call(null,vec__20664,(0),null);var v = cljs.core.nth.call(null,vec__20664,(1),null);f.call(null,v,k);
{
var G__20666 = seq__20660;
var G__20667 = chunk__20661;
var G__20668 = count__20662;
var G__20669 = (i__20663 + (1));
seq__20660 = G__20666;
chunk__20661 = G__20667;
count__20662 = G__20668;
i__20663 = G__20669;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20660);if(temp__4126__auto__)
{var seq__20660__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20660__$1))
{var c__15906__auto__ = cljs.core.chunk_first.call(null,seq__20660__$1);{
var G__20670 = cljs.core.chunk_rest.call(null,seq__20660__$1);
var G__20671 = c__15906__auto__;
var G__20672 = cljs.core.count.call(null,c__15906__auto__);
var G__20673 = (0);
seq__20660 = G__20670;
chunk__20661 = G__20671;
count__20662 = G__20672;
i__20663 = G__20673;
continue;
}
} else
{var vec__20665 = cljs.core.first.call(null,seq__20660__$1);var k = cljs.core.nth.call(null,vec__20665,(0),null);var v = cljs.core.nth.call(null,vec__20665,(1),null);f.call(null,v,k);
{
var G__20674 = cljs.core.next.call(null,seq__20660__$1);
var G__20675 = null;
var G__20676 = (0);
var G__20677 = (0);
seq__20660 = G__20674;
chunk__20661 = G__20675;
count__20662 = G__20676;
i__20663 = G__20677;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x20659,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x20659;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__20658 = obj;G__20658.push(kfn.call(null,k),vfn.call(null,v));
return G__20658;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t20681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t20681 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta20682){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta20682 = meta20682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t20681.cljs$lang$type = true;
cognitect.transit.t20681.cljs$lang$ctorStr = "cognitect.transit/t20681";
cognitect.transit.t20681.cljs$lang$ctorPrWriter = (function (this__15713__auto__,writer__15714__auto__,opt__15715__auto__){return cljs.core._write.call(null,writer__15714__auto__,"cognitect.transit/t20681");
});
cognitect.transit.t20681.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t20681.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t20681.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t20681.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t20681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20683){var self__ = this;
var _20683__$1 = this;return self__.meta20682;
});
cognitect.transit.t20681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20683,meta20682__$1){var self__ = this;
var _20683__$1 = this;return (new cognitect.transit.t20681(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta20682__$1));
});
cognitect.transit.__GT_t20681 = (function __GT_t20681(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta20682){return (new cognitect.transit.t20681(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta20682));
});
}
return (new cognitect.transit.t20681(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});
