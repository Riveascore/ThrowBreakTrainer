# == Schema Information
#
# Table name: high_scores
#
#  id         :integer          not null, primary key
#  score      :string(255)
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class HighScore < ActiveRecord::Base
end
