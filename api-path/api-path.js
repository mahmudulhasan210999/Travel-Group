var host = "https://api.foringerdol.com";
// var authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjg1MzA3LCJqdGkiOiJhNmYwYjJlNWEwNWY0NjBkYjc2YjUzOWQ0NmI0MjM3MyIsInVzZXJfaWQiOjQxMn0.vxVGyFEO1PYYyzm1VD4IxRgQfOuMXrHFXjRl0fwUlpA';

const FAPI = {
    'get_domestic': host+'/locations/view/by-category/Domestic',
    'get_international': host+'/locations/view/by-category/International',
    'get_events': host + '/events/list/',
    'get_event_details': host+ '/events/details/',
    'get_trending_events': host + '/events/trending/',
    'get_events_by_location': host+ '/events/bylocation/',

    'get_hotels': host + '/hotels/list/',
    'get_hotel_details': host + '/hotels/details/',

    'get_Stories': host + '/blogs/getlist/',
    'get_story_details': host + '/blogs/getdetail/',

    'get_Reviews': host + '/reviews/list/',

    'get_locations': host + '/locations/view/list/',

    'post_booking': host + '/booking/create/',
    'get_images': host + '/pictures/get/',

    'post_subscriber_mail': host + '/booking/subscriber-mail/create/'
}

export default FAPI;