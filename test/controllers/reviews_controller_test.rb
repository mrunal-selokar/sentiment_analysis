require 'test_helper'

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  def setup
  	@review = reviews(:good)
  end

  test "should redirect create when not logged in" do
  	assert_no_difference 'Review.count' do
  		post review_path, params: {review: {content: "Very Good"}}
  	end
  	assert_redirected_to login_url
  end


end
