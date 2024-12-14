# ruleid: structured-log
Rails.logger.info("message")

# ruleid: structured-log
Rails.logger.info("message #{interpolated_var}")

# ruleid: structured-log
Rails.logger.debug("message " + concatenated_var)

# ok: structured-log
Rails.logger.info("message", foo: 'bar')
