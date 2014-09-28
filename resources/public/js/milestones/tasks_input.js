// Compiled by ClojureScript 0.0-2356
goog.provide('milestones.tasks_input');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('ajax.core');
goog.require('domina.events');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.events');
goog.require('ajax.core');
milestones.tasks_input.handler = (function handler(response){var temp__4124__auto__ = cljs.core._EQ_.call(null,response.call(null,"response"),"success");if(temp__4124__auto__)
{var x = temp__4124__auto__;return domina.remove_class_BANG_.call(null,domina.by_id.call(null,"submit-tasks"),"disabled");
} else
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"submit-tasks"),"disabled");
}
});
milestones.tasks_input.error_handler = (function error_handler(p__20319){var map__20321 = p__20319;var map__20321__$1 = ((cljs.core.seq_QMARK_.call(null,map__20321))?cljs.core.apply.call(null,cljs.core.hash_map,map__20321):map__20321);var status_text = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
});
milestones.tasks_input.tasks = "Task 1 is to design tasks specifier, assigned to ibtissem, lasts 2 days, priority low, depends on tasks 1 2";
milestones.tasks_input.interractive_handler = (function interractive_handler(){return ajax.core.POST.call(null,"/check-tasks",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),domina.value.call(null,domina.by_id.call(null,"tasks-input"))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),milestones.tasks_input.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),milestones.tasks_input.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
console.log(domina.single_node.call(null,"#tasks-input"));
domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"button"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){return alert("Fixing cljs events");
}));
domina.events.listen_BANG_.call(null,domina.single_node.call(null,"#tasks-input"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){return console.log("button clicked!");
}));
/**
* Doesn't use GClosure, to be more realistic
*/
milestones.tasks_input.simulate_click_event = (function simulate_click_event(el){var el__$1 = domina.single_node.call(null,el);var document = window.document;if(cljs.core.truth_(el__$1.click))
{return el__$1.click();
} else
{if(cljs.core.truth_(document.createEvent))
{var e = document.createEvent("MouseEvents");e.initMouseEvent("click",true,true,window,(0),(0),(0),(0),(0),false,false,false,false,(0),null);
return el__$1.dispatchEvent(e);
} else
{throw "Unable to simulate click event";

}
}
});
