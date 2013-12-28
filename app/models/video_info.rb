# == Schema Information
#
# Table name: video_infos
#
#  id                     :integer          not null, primary key
#  video_name             :string(255)
#  number_of_milliseconds :integer
#  created_at             :datetime
#  updated_at             :datetime
#

class VideoInfo < ActiveRecord::Base
end
