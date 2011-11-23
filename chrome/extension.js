/*
 * 'Missing e' Extension
 *
 * Copyright 2011, Jeremy Cutler
 * Released under the GPL version 3 licence.
 * SEE: GPL-LICENSE.txt
 *
 * This file is part of 'Missing e'.
 *
 * 'Missing e' is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * 'Missing e' is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with 'Missing e'. If not, see <http://www.gnu.org/licenses/>.
 */

var MissingE = {};

var extension = {
   isChrome: true,
   isFirefox: false,
   isOpera: false,
   isSafari: false,
   addAjaxListener: function(func) {
      if (typeof func !== "function") { return false; }
      $(document).bind('MissingEajax', function(e) {
         func(e.originalEvent.data.type, e.originalEvent.data.list);
      });
   },
   sendRequest: function(name, request, callback) {
      request.greeting = name;
      chrome.extension.sendRequest(request, function(response) {
         callback(response);
      });
   },
   start: function() {
      var i;
      for (i in MissingE) {
         if (MissingE.hasOwnProperty(i)) {
            MissingE[i].init();
         }
      }
   }
};
