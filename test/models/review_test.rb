require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
	def setup
		@user = users(:mrunal)
		@hotel = hotels(:example)
		@review = @user.reviews.build(content: "Very good", hotel_id: @hotel.id)
	end

	test "should be valid" do
    	assert @review.valid?
  	end

  test "user id should be present" do
    @review.user_id = nil
    assert_not @review.valid?
  end

  test "hotel id should be valid" do
  	@review.hotel_id = nil
  	assert_not @review.valid?
  end

  test "content should be present" do
    @review.content = "   "
    assert_not @review.valid?
  end

  test "content should be at most 140 characters" do
    @review.content = "a" * 141
    assert_not @review.valid?
  end

    test "order should be most recent first" do
    assert_equal reviews(:most_recent), Review.first
  end

end
