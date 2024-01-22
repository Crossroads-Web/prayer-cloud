import React, { useEffect } from 'react'
import "../styles/BibleMaterials.css";
import '../js/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import {season_content} from '../assets/season-content';
import styled from 'styled-components';
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
const BibleMaterials = () => {


    useEffect(() =>  {
    // Create table on load
    
    var oTable = $('#content_table').DataTable( {
      // json file in data/content.js
      data: season_content,
      responsive: true,
      "autoWidth": false,
  
      // Content in textarea for easy selection
      // https://www.datatables.net/examples/advanced_init/column_render.html
      "columnDefs": [
        {
          "render": function ( data, type, row ) {
            // Wrap the main content in a div which extends other functionality
            // Data attribute for the copy to clipboard function
            // Get the Source column and add to the body
            return '<div class="content-body">' +
              // <pre> in theory will respect indenting, like in Psalms
              '<pre class="txt-pre m-3">' + data + '<br>– ' + row[1] + '</pre>' +              
             //'<button class="btn-copy btn-sm btn btn-outline-info" data-clipboard-text="'+data + ' – ' + row[1] + '">Copy</button>' +
            '</div>';
          },
          "targets": 0
        }
      ],
      language: {
        paginate: {
          next: 'NEXT >>',
          previous: '<< Previous'  
        }
      },
      // Add id and class to row - currently for debugging only
      // I don't love hard coding the JSON data-element, but aData[5] is the media type, e.g. "Verse"
      "fnCreatedRow": function( nRow, aData, iDataIndex ) {
        $(nRow).attr({'id': iDataIndex, 'class': 'row-' + aData[5] });
      }
      
    });
    
    // Bind the big search - there is a datatables default search hidden in CSS; this is a nicer UX
    $('#bigSearch').on('keyup', function () {
      oTable.search( this.value ).draw();
      // on load we hide the table (pushed below the fold)
      $('#loading').removeClass('load-search');
    });
    // Hit clear to hide table, show hashtags again
    $('#clear').click(function () {
      $('#loading').addClass('load-search');
      $('#bigSearch').val("");
      $('#js-media-all').click();
    })
  
    // Onload: search by popular; .quicksearch buttons by keywords
    $('.quicksearch').click(function () {
      var query = (this.value);
      $('#bigSearch').val(query).keyup();
    });
  
   
    oTable.on('draw.dt', function() {
     // $('.content-body').linkify({ target: "tinyframe" });
    });
  
    // Filter Radio Controls - by media type
    $('.media-filter').change(function () {
      oTable.columns(5).search(this.value).draw();
    });
  
    // Hide columns
    // Onload:
    $('.toggle-vis input').each(function(){
      if (!$(this).is(':checked')) {
        oTable.column( $(this).attr('data-column') ).visible( false );
      }
    });
    // On change:
    $(".toggle-vis input").change(function(){
      if ($(this).is(':checked')) {
        oTable.column( $(this).attr('data-column') ).visible( true );
      }
      if (!$(this).is(':checked')) {
        oTable.column( $(this).attr('data-column') ).visible( false );
      }
    });
    
    // Style Elements
    $('#content_table_filter input').attr({'id': 's', 'name': 's', 'results': '9', 'autosave': 'season_search'})
    $('#content_table_filter').addClass('small');
    // Select element, number of visible entries
    $('#content_table_length select').addClass('form-control-sm');
    $('#content_table_length').addClass('small');

   
},[]);

  return (
    <Wrapper className='row mt-5 mb-5'>
        <Header className="mb-4 p-2 mt-4">Bible Materials</Header>
  
        <p className="text-center m-0">Start a search to find verses, prayers, and other Bible based materials.</p>

        <nav id="loading" className="load-search p-4">
        <div className="input-group mb-3">
            <input id="bigSearch" type="search" className="form-control fa rounded" placeholder="&#xF002; Search..."  aria-label="Search for..." autoComplete="off" spellCheck="false"/>
            <div className="input-group-append">
            <button type="button" className="btn bg-transparent" style={{marginLeft: "-40px", zIndex: "100" }}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            </div>
            
        </div>

        <div className="load-search-content text-center">
      
        <div className=" mb-5">
        <button className="quicksearch btn btn-outline-danger m-1" id="everything" value=" ">everything</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="100 Huntley Street Topics">100HS Topics</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="love">love</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="grief">grief</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="anger">anger</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="patience">patience</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="peace">peace</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="popularSearch" value="bestverse">best verses</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Stewardship">#Stewardship</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Help-your-business">#Help-your-business</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Serving-God">#Serving-God</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Jesus-is-your-Righteousness">#Jesus-is-your-Righteousness</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Jesus-is-your-Fellowship">#Jesus-is-your-Fellowship</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Jesus-is-your-Companion">#Jesus-is-your-Companion</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Faithfulness-of-God">#Faithfulness-of-God</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Tempted">#Tempted</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Understanding">#Understanding</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#The-Church">#The-Church</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Jesus-is-your-Love">#Jesus-is-your-Love</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Confused">#Confused</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Mentally-disturbed">#Mentally-disturbed</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Salvation">#Salvation</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Return-of-Christ">#Return-of-Christ</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Eternity">#Eternity</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Grief">#Grief</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Financial-trouble">#Financial-trouble</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Bible-is-your-Deed-of-Inheritance">#Bible-is-your-Deed-of-Inheritance</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Jesus-is-your-Lord">#Jesus-is-your-Lord</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#The-Holy-Spirit">#The-Holy-Spirit</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Divorce">#Divorce</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Unsaved-loved-ones">#Unsaved-loved-ones</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Singles">#Singles</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Marriage">#Marriage</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Wives">#Wives</button>
        <button className="quicksearch btn btn-outline-dark m-1" id="otherSearch" value="#Widows">#Widows</button>
        </div>
    </div>
    </nav>

        <Filters className="filter-bar small row">
          <div className="  m-2">
              <label className="clickable p-1">
              <input id="js-media-all" type="radio" className="media-filter" name="media" value="" defaultChecked/>
              All Media
              </label>
              <label className="clickable p-1">
              <input id="js-media-verse" type="radio" className="media-filter" name="media" value="Verse"/>
              Verses
              </label>
              <label className="clickable p-1">
              <input id="js-media-sermon" type="radio" className="media-filter" name="media" value="Sermon"/>
              Sermon
              </label>
              <label className="clickable p-1">
              <input id="js-media-quote" type="radio" className="media-filter" name="media" value="Quote"/>
              Quotes
              </label>
              <label className="clickable p-1">
              <input id="js-media-worship" type="radio" className="media-filter" name="media" value="Worship"/>
              Worship
              </label>
              <label className="clickable p-1">
              <input id="js-media-link" type="radio" className="media-filter" name="media" value="Link"/>
              Weblinks
              </label>
          </div>
          <div className=" m-2">
              Show:
              <label className="toggle-vis clickable p-1"><input id="js-col-1" type="checkbox" data-column="1" /> Source</label>
              <label className="toggle-vis clickable p-1"><input id="js-col-2" type="checkbox" data-column="2"/> Tags</label>
              <label className="toggle-vis clickable p-1"><input id="js-col-3" type="checkbox" data-column="3"/> Posted</label>
              <label className="toggle-vis clickable p-1"><input id="js-col-4" type="checkbox" data-column="4"/> Citation</label>
              <label className="toggle-vis clickable p-1"><input id="js-col-5" type="checkbox" data-column="5"/> Type</label>
          </div>
        </Filters>

        <table id="content_table" className="w-100 table table-responsive table-hover mb-5" >
          <caption className="sr-only">List of verses, quotes, and other media.</caption>
          <thead className="">
              <tr>
              <th>Content</th>
              <th>Source</th>
              <th>Tags</th>
              <th>Posted by</th>
              <th>Citation</th>
              <th>Type</th>
              </tr>
          </thead>
        </table> 
    </Wrapper>
  )
}
const Wrapper = styled.div`
tbody tr:nth-child(odd) {
  background-color: #D9EEF0;
  
}
tbody tr:nth-child(even) {
  background-color: #F3F9FA;
}

tr, th, table, thead, td{
  border: 0;
}
`;
const Filters = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
div{
  width: auto;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
   box-sizing: content-box;
}
`;
const Header = styled.h1`
  font-weight: 1000;
`;
export default BibleMaterials;